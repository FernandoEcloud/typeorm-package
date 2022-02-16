/**
 * Same as Partial<T> but goes deeper and makes Partial<T> all its properties and sub-properties.
 */
<<<<<<< HEAD
export declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]> | T[P];
};
=======
export declare type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
>>>>>>> a3495c7 (INIT)
