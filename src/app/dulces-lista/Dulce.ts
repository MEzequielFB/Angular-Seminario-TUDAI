import { Imagen } from "./Imagen"

export interface Dulce {
    titulo: String,
    precio: number,
    descripcion: String,
    imagen: Imagen,
    stock: number
    descuento: boolean,
    cantidad: number
}