/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface RoyaltyFacetInterface extends utils.Interface {
  functions: {
    "getDefaultRoyalty()": FunctionFragment;
    "royaltyInfo(uint256,uint256)": FunctionFragment;
    "setDefaultRoyalty(uint16,address)": FunctionFragment;
    "setRoyalty(uint256,uint16,address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "supportsInterfaces()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getDefaultRoyalty"
      | "royaltyInfo"
      | "setDefaultRoyalty"
      | "setRoyalty"
      | "supportsInterface"
      | "supportsInterfaces"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDefaultRoyalty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "royaltyInfo",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultRoyalty",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyalty",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterfaces",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getDefaultRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "royaltyInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultRoyalty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setRoyalty", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterfaces",
    data: BytesLike
  ): Result;

  events: {};
}

export interface RoyaltyFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RoyaltyFacetInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getDefaultRoyalty(overrides?: CallOverrides): Promise<[number, string]>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    setDefaultRoyalty(
      defaultRoyaltyBPS: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      bps: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    supportsInterfaces(overrides?: CallOverrides): Promise<[string[]]>;
  };

  getDefaultRoyalty(overrides?: CallOverrides): Promise<[number, string]>;

  royaltyInfo(
    tokenId: PromiseOrValue<BigNumberish>,
    salePrice: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber]>;

  setDefaultRoyalty(
    defaultRoyaltyBPS: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRoyalty(
    tokenId: PromiseOrValue<BigNumberish>,
    bps: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  supportsInterfaces(overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    getDefaultRoyalty(overrides?: CallOverrides): Promise<[number, string]>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber]>;

    setDefaultRoyalty(
      defaultRoyaltyBPS: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      bps: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    supportsInterfaces(overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    getDefaultRoyalty(overrides?: CallOverrides): Promise<BigNumber>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDefaultRoyalty(
      defaultRoyaltyBPS: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      bps: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportsInterfaces(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getDefaultRoyalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    royaltyInfo(
      tokenId: PromiseOrValue<BigNumberish>,
      salePrice: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDefaultRoyalty(
      defaultRoyaltyBPS: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRoyalty(
      tokenId: PromiseOrValue<BigNumberish>,
      bps: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportsInterfaces(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
