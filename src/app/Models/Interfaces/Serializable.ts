export interface Serializable<R,T> {

    build(data:R):T;

}