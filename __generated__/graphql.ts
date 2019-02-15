export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

/** Query any Pokémon by number or name */
export interface Query {
  query?: Maybe<Query>;

  pokemons?: Maybe<Pokemon[]>;

  pokemon?: Maybe<Pokemon>;
}

/** Represents a Pokémon */
export interface Pokemon {
  /** The ID of an object */
  id: string;
  /** The identifier of this Pokémon */
  number?: Maybe<string>;
  /** The name of this Pokémon */
  name?: Maybe<string>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: Maybe<PokemonDimension>;
  /** The minimum and maximum weight of this Pokémon */
  height?: Maybe<PokemonDimension>;
  /** The classification of this Pokémon */
  classification?: Maybe<string>;
  /** The type(s) of this Pokémon */
  types?: Maybe<string[]>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: Maybe<string[]>;
  /** The attacks of this Pokémon */
  attacks?: Maybe<PokemonAttack>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: Maybe<string[]>;

  fleeRate?: Maybe<number>;
  /** The maximum CP of this Pokémon */
  maxCP?: Maybe<number>;
  /** The evolutions of this Pokémon */
  evolutions?: Maybe<Pokemon[]>;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: Maybe<PokemonEvolutionRequirement>;
  /** The maximum HP of this Pokémon */
  maxHP?: Maybe<number>;

  image?: Maybe<string>;
}

/** Represents a Pokémon's dimensions */
export interface PokemonDimension {
  /** The minimum value of this dimension */
  minimum?: Maybe<string>;
  /** The maximum value of this dimension */
  maximum?: Maybe<string>;
}

/** Represents a Pokémon's attack types */
export interface PokemonAttack {
  /** The fast attacks of this Pokémon */
  fast?: Maybe<Attack[]>;
  /** The special attacks of this Pokémon */
  special?: Maybe<Attack[]>;
}

/** Represents a Pokémon's attack types */
export interface Attack {
  /** The name of this Pokémon attack */
  name?: Maybe<string>;
  /** The type of this Pokémon attack */
  type?: Maybe<string>;
  /** The damage of this Pokémon attack */
  damage?: Maybe<number>;
}

/** Represents a Pokémon's requirement to evolve */
export interface PokemonEvolutionRequirement {
  /** The amount of candy to evolve */
  amount?: Maybe<number>;
  /** The name of the candy to evolve */
  name?: Maybe<string>;
}

export interface Mutation {
  createPokemon?: Maybe<Pokemon>;
}

// ====================================================
// Arguments
// ====================================================

export interface PokemonsQueryArgs {
  first: number;
}
export interface PokemonQueryArgs {
  id?: Maybe<string>;

  name?: Maybe<string>;
}
export interface CreatePokemonMutationArgs {
  name: string;
}

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Query any Pokémon by number or name */
export interface QueryResolvers<TContext = {}, TypeParent = {}> {
  query?: QueryQueryResolver<Maybe<Query>, TypeParent, TContext>;

  pokemons?: QueryPokemonsResolver<Maybe<Pokemon[]>, TypeParent, TContext>;

  pokemon?: QueryPokemonResolver<Maybe<Pokemon>, TypeParent, TContext>;
}

export type QueryQueryResolver<
  R = Maybe<Query>,
  Parent = {},
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type QueryPokemonsResolver<
  R = Maybe<Pokemon[]>,
  Parent = {},
  TContext = {}
> = Resolver<R, Parent, TContext, QueryPokemonsArgs>;
export interface QueryPokemonsArgs {
  first: number;
}

export type QueryPokemonResolver<
  R = Maybe<Pokemon>,
  Parent = {},
  TContext = {}
> = Resolver<R, Parent, TContext, QueryPokemonArgs>;
export interface QueryPokemonArgs {
  id?: Maybe<string>;

  name?: Maybe<string>;
}

/** Represents a Pokémon */
export interface PokemonResolvers<TContext = {}, TypeParent = Pokemon> {
  /** The ID of an object */
  id?: PokemonIdResolver<string, TypeParent, TContext>;
  /** The identifier of this Pokémon */
  number?: PokemonNumberResolver<Maybe<string>, TypeParent, TContext>;
  /** The name of this Pokémon */
  name?: PokemonNameResolver<Maybe<string>, TypeParent, TContext>;
  /** The minimum and maximum weight of this Pokémon */
  weight?: PokemonWeightResolver<Maybe<PokemonDimension>, TypeParent, TContext>;
  /** The minimum and maximum weight of this Pokémon */
  height?: PokemonHeightResolver<Maybe<PokemonDimension>, TypeParent, TContext>;
  /** The classification of this Pokémon */
  classification?: PokemonClassificationResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
  /** The type(s) of this Pokémon */
  types?: PokemonTypesResolver<Maybe<string[]>, TypeParent, TContext>;
  /** The type(s) of Pokémons that this Pokémon is resistant to */
  resistant?: PokemonResistantResolver<Maybe<string[]>, TypeParent, TContext>;
  /** The attacks of this Pokémon */
  attacks?: PokemonAttacksResolver<Maybe<PokemonAttack>, TypeParent, TContext>;
  /** The type(s) of Pokémons that this Pokémon weak to */
  weaknesses?: PokemonWeaknessesResolver<Maybe<string[]>, TypeParent, TContext>;

  fleeRate?: PokemonFleeRateResolver<Maybe<number>, TypeParent, TContext>;
  /** The maximum CP of this Pokémon */
  maxCP?: PokemonMaxCpResolver<Maybe<number>, TypeParent, TContext>;
  /** The evolutions of this Pokémon */
  evolutions?: PokemonEvolutionsResolver<
    Maybe<Pokemon[]>,
    TypeParent,
    TContext
  >;
  /** The evolution requirements of this Pokémon */
  evolutionRequirements?: PokemonEvolutionRequirementsResolver<
    Maybe<PokemonEvolutionRequirement>,
    TypeParent,
    TContext
  >;
  /** The maximum HP of this Pokémon */
  maxHP?: PokemonMaxHpResolver<Maybe<number>, TypeParent, TContext>;

  image?: PokemonImageResolver<Maybe<string>, TypeParent, TContext>;
}

export type PokemonIdResolver<
  R = string,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonNumberResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonNameResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonWeightResolver<
  R = Maybe<PokemonDimension>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonHeightResolver<
  R = Maybe<PokemonDimension>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonClassificationResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonTypesResolver<
  R = Maybe<string[]>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonResistantResolver<
  R = Maybe<string[]>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonAttacksResolver<
  R = Maybe<PokemonAttack>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonWeaknessesResolver<
  R = Maybe<string[]>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonFleeRateResolver<
  R = Maybe<number>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonMaxCpResolver<
  R = Maybe<number>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonEvolutionsResolver<
  R = Maybe<Pokemon[]>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonEvolutionRequirementsResolver<
  R = Maybe<PokemonEvolutionRequirement>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonMaxHpResolver<
  R = Maybe<number>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonImageResolver<
  R = Maybe<string>,
  Parent = Pokemon,
  TContext = {}
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's dimensions */
export interface PokemonDimensionResolvers<
  TContext = {},
  TypeParent = PokemonDimension
> {
  /** The minimum value of this dimension */
  minimum?: PokemonDimensionMinimumResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
  /** The maximum value of this dimension */
  maximum?: PokemonDimensionMaximumResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
}

export type PokemonDimensionMinimumResolver<
  R = Maybe<string>,
  Parent = PokemonDimension,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonDimensionMaximumResolver<
  R = Maybe<string>,
  Parent = PokemonDimension,
  TContext = {}
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's attack types */
export interface PokemonAttackResolvers<
  TContext = {},
  TypeParent = PokemonAttack
> {
  /** The fast attacks of this Pokémon */
  fast?: PokemonAttackFastResolver<Maybe<Attack[]>, TypeParent, TContext>;
  /** The special attacks of this Pokémon */
  special?: PokemonAttackSpecialResolver<Maybe<Attack[]>, TypeParent, TContext>;
}

export type PokemonAttackFastResolver<
  R = Maybe<Attack[]>,
  Parent = PokemonAttack,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonAttackSpecialResolver<
  R = Maybe<Attack[]>,
  Parent = PokemonAttack,
  TContext = {}
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's attack types */
export interface AttackResolvers<TContext = {}, TypeParent = Attack> {
  /** The name of this Pokémon attack */
  name?: AttackNameResolver<Maybe<string>, TypeParent, TContext>;
  /** The type of this Pokémon attack */
  type?: AttackTypeResolver<Maybe<string>, TypeParent, TContext>;
  /** The damage of this Pokémon attack */
  damage?: AttackDamageResolver<Maybe<number>, TypeParent, TContext>;
}

export type AttackNameResolver<
  R = Maybe<string>,
  Parent = Attack,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type AttackTypeResolver<
  R = Maybe<string>,
  Parent = Attack,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type AttackDamageResolver<
  R = Maybe<number>,
  Parent = Attack,
  TContext = {}
> = Resolver<R, Parent, TContext>;
/** Represents a Pokémon's requirement to evolve */
export interface PokemonEvolutionRequirementResolvers<
  TContext = {},
  TypeParent = PokemonEvolutionRequirement
> {
  /** The amount of candy to evolve */
  amount?: PokemonEvolutionRequirementAmountResolver<
    Maybe<number>,
    TypeParent,
    TContext
  >;
  /** The name of the candy to evolve */
  name?: PokemonEvolutionRequirementNameResolver<
    Maybe<string>,
    TypeParent,
    TContext
  >;
}

export type PokemonEvolutionRequirementAmountResolver<
  R = Maybe<number>,
  Parent = PokemonEvolutionRequirement,
  TContext = {}
> = Resolver<R, Parent, TContext>;
export type PokemonEvolutionRequirementNameResolver<
  R = Maybe<string>,
  Parent = PokemonEvolutionRequirement,
  TContext = {}
> = Resolver<R, Parent, TContext>;

export interface MutationResolvers<TContext = {}, TypeParent = {}> {
  createPokemon?: MutationCreatePokemonResolver<
    Maybe<Pokemon>,
    TypeParent,
    TContext
  >;
}

export type MutationCreatePokemonResolver<
  R = Maybe<Pokemon>,
  Parent = {},
  TContext = {}
> = Resolver<R, Parent, TContext, MutationCreatePokemonArgs>;
export interface MutationCreatePokemonArgs {
  name: string;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface Mocks<TContext = {}> {
  Query?(): QueryResolvers<TContext>;
  Pokemon?(): PokemonResolvers<TContext>;
  PokemonDimension?(): PokemonDimensionResolvers<TContext>;
  PokemonAttack?(): PokemonAttackResolvers<TContext>;
  Attack?(): AttackResolvers<TContext>;
  PokemonEvolutionRequirement?(): PokemonEvolutionRequirementResolvers<
    TContext
  >;
  Mutation?(): MutationResolvers<TContext>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
