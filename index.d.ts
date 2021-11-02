/* eslint-disable @typescript-eslint/ban-types */

// string aliases used to indicate some semantic meaning of the value
// ! these types are used in GQL Scalar generation – if you are for some reason changing them, make sure to update the generation as well

/**
 * Simple string alias for a more concise typings involving ID of entities.
 */
declare type ID = string

/**
 * Simple alias to better annotate where ISO or another Date-convertible date-time is expected
 */
declare type DateString = string

/**
 * String representing a time value, it is not a valid date string
 * typically might include multiple sections separated by `:` (HH:MM:SS)
 */
declare type TimeString = string

/**
 * Stringified JSON object (that you probably want to JSON.parse)
 */
declare type JsonString = string
/**
 * Either specified type or null
 */

declare type Nullable<TType> = TType | null
/**
 * Shortcut for `Nullable<ID>`
 */
declare type NullableID = Nullable<ID>
/**
 * Declare all type properties as Nullable
 */
declare type AllNullable<TObject> = {
  [TKey in keyof TObject]: Nullable<TObject[TKey]>
}
/**
 * Simple alias for `Record<string, V = unknown>` for string key based objects.
 */
declare type Dictionary<TValue = unknown> = Record<string, TValue>
/**
 * Shortcut for `ReadonlyArray<T>`
 */
declare type RoA<TItem> = ReadonlyArray<TItem>
/**
 * Make properties of object writable again
 */
declare type Writeable<TObject> = { -readonly [TKey in keyof TObject]: TObject[TKey] }
/**
 * returns the type that is wrapped inside the provided promise type
 */
declare type PromisedType<TPromise> = TPromise extends PromiseLike<infer TInferredType>
  ? TInferredType
  : TPromise
/**
 * turns all properties of provided type into partials (OriginalType | undefined)
 */
declare type RecursivePartial<TObject> = {
  [key in keyof TObject]?: TObject[key] extends (infer TInferredType)[]
    ? RecursivePartial<TInferredType>[]
    : TObject[key] extends Record<string, unknown>
    ? RecursivePartial<TObject[key]>
    : TObject[key]
}
/**
 * just a shorthand for the React.ComponentProps helper
 */
declare type PropsOf<TComponent> = React.ComponentProps<TComponent>
/**
 * use to describe that the component does accept children & works with them but also can work without them
 */
declare type Children = React.PropsWithChildren<{}>
/**
 * use to describe that the component does require children to be meaningful
 */
declare type RequiredChildren = Required<React.PropsWithChildren<{}>>
/**
 * use to describe that the component does not expect any children prop (so that we wouldn't pass any by accident)
 */
declare type NoChildren = {
  children?: never
}
/**
 * removes `null` and `undefined` options from the type, making it strictly defined
 */
declare type Defined<T> = Exclude<T, null | undefined>

type FilteredKeys<TBaseObject, TRequestedValueType> = {
  [key in keyof TBaseObject]: TBaseObject[key] extends TRequestedValueType ? key : never
}
/**
 * get keys from `TBaseObject` that are referencing to a value of type `TRequestedValueType` in that object
 */
declare type KeysOfType<TBaseObject, TRequestedValueType> = FilteredKeys<
  TBaseObject,
  TRequestedValueType
>[keyof TBaseObject]
/**
 * get properties (keys and values) from `TBaseObject` which value is of type `TRequestedValueType` in that object
 */
declare type PropertiesOfType<TBaseObject, TRequestedValueType> = Pick<
  TBaseObject,
  KeysOfType<TBaseObject, TRequestedValueType>
>
