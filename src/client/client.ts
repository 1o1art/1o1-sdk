import { config } from "@1o1art/1o1-contracts";
import { BigNumber } from "ethers";
import { ethers } from "ethers";
import { NftContractBuilder } from "./nftBuilder";
import { getAllFacets, getContractFacets } from "../lib/coreFacets";
import presets from "../metadata/presets.json";
import { Cut, FacetCutAction } from "../lib/facets";
import { contracts } from "@1o1art/1o1-contracts";

type PresetName = "delegatable" | "basic";

export interface ContractsByOwner {
  contractAddrs: string[];
  count: BigNumber;
  total: BigNumber;
}

export interface NftContractData {
  nftContract: contracts.ERC721TokenBaseFacet;
  builder: NftContractBuilder;
}

export class ClientFactory {
  static async makeClientFromWallet(wallet: ethers.Wallet): Promise<Client> {
    return await ClientFactory.makeClientCore(wallet);
  }

  static async makeClientFromKey(
    privateKey: string,
    rpcUrl: string
  ): Promise<Client> {
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const signer = new ethers.Wallet(privateKey, provider);
    return await ClientFactory.makeClientCore(signer);
  }

  private static async makeClientCore(signer: ethers.Wallet) {
    const chainId = await signer.getChainId();
    const cfg = config.getConfigById(chainId);

    return {
      getContractsByOwner: async (
        owner: string,
        offset: number,
        limit: number,
        sortOrder: "desc" | "asc"
      ) => {
        const diamondContract =
          contracts.DiamondContractLauncherFacet__factory.connect(
            cfg.nftLauncherAddr,
            signer
          );
        const sort = sortOrder === "desc";
        const [contractAddrs, count, total] =
          await diamondContract.getContractsByOwner(owner, offset, limit, sort);
        return {
          contractAddrs,
          count,
          total
        };
      },
      getNftContractData: async (address: string): Promise<NftContractData> => {
        const erc721 = contracts.ERC721TokenBaseFacet__factory.connect(
          address,
          signer
        );

        const builder = new NftContractBuilder(signer, cfg);
        const rawFacetData = await getContractFacets(address, cfg.name);
        builder.setFacets(
          rawFacetData.map(
            (f: { facetAddress: string; functionSelectors: string[] }) => {
              return {
                action: FacetCutAction.Add,
                facetAddress: f.facetAddress,
                functionSelectors: f.functionSelectors
              };
            }
          )
        );
        return {
          nftContract: erc721,
          builder
        };
      },
      createNftContractBuilder: (): NftContractBuilder => {
        return new NftContractBuilder(signer, cfg);
      },
      getPresetFacets: async (presetName: PresetName): Promise<Cut[]> => {
        const { facets } = await getAllFacets(
          cfg.name,
          await signer.getAddress()
        );
        const preset = presets.find((p) =>
          p.name.toLowerCase().includes(presetName.toLowerCase())
        );
        return facets
          .filter((f) => preset?.facets.includes(f.id))
          .map((f) => {
            if (!f.facetAddress || !f.functionSelectors)
              throw new Error("no facet address or function selectors");
            return {
              action: FacetCutAction.Add,
              facetAddress: f.facetAddress,
              functionSelectors: f.functionSelectors
            };
          });
      }
    };
  }
}

export interface Client {
  getContractsByOwner(
    owner: string,
    offset: number,
    limit: number,
    sortOrder: string
  ): Promise<ContractsByOwner>;
  getNftContractData(address: string): Promise<NftContractData>;
  createNftContractBuilder(): NftContractBuilder;
  getPresetFacets(presetName: string): Promise<Cut[]>;
}
