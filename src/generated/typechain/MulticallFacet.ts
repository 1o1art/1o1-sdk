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

export interface MulticallFacetInterface extends utils.Interface {
  functions: {
    "add(uint256,uint256)": FunctionFragment;
    "div(uint256,uint256)": FunctionFragment;
    "mod(uint256,uint256)": FunctionFragment;
    "mul(uint256,uint256)": FunctionFragment;
    "multicall(bytes[])": FunctionFragment;
    "multicallThen(bytes[],uint256[])": FunctionFragment;
    "sub(uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "add"
      | "div"
      | "mod"
      | "mul"
      | "multicall"
      | "multicallThen"
      | "sub"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "add",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "div",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mod",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "mul",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "multicallThen",
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "sub",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "div", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multicallThen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sub", data: BytesLike): Result;

  events: {};
}

export interface MulticallFacet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MulticallFacetInterface;

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
    add(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    div(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mod(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    mul(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    multicallThen(
      data: PromiseOrValue<BytesLike>[],
      indices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sub(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  add(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  div(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mod(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  mul(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  multicall(
    data: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  multicallThen(
    data: PromiseOrValue<BytesLike>[],
    indices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sub(
    a: PromiseOrValue<BigNumberish>,
    b: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    add(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    div(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mod(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mul(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    multicallThen(
      data: PromiseOrValue<BytesLike>[],
      indices: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<string[]>;

    sub(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    add(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    div(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mod(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mul(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    multicallThen(
      data: PromiseOrValue<BytesLike>[],
      indices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sub(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    div(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mod(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mul(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multicall(
      data: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    multicallThen(
      data: PromiseOrValue<BytesLike>[],
      indices: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sub(
      a: PromiseOrValue<BigNumberish>,
      b: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
