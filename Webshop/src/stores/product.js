import {defineStore} from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => {
        return {
            products: [
                {id: "1", titel: "You are Loved T-shirt", omschrijving: "Met dit leuke t-shirtje straal jij deze zomer", afbeelding: "/t-shirt1.webp", prijs: 19.99, btw: 0.21, stock: 10, categorie: "kleding"},
                {id: "2", titel: "Kleurrijke wenskaartjes", omschrijving: "Wie maak jij blij met deze leuke wenskaartjes", afbeelding: "/kaartjes1.webp", prijs: 9.99, btw: 0.21, stock: 5, categorie: "kaartjes"},
                {id: "3", titel: "Soesjieee T-shirt", omschrijving: "Zei iemand Sooooeeeeesjieeee?", afbeelding: "/soesjieee1.webp", prijs: 15.99, btw: 0.21, stock: 2, categorie: "kleding"}
            ]
        }
    }
})