import { FirebaseError } from 'firebase/app';
import React,{creatContext, createContext} from 'react';
import {fireStore} from '../auth/Firebase';

export const ProductsContext = createContext();
export class ProductsContextProvider extends React.Component{

    state={
        products:[]
    }
    componentDidMount(){
        const prevProducts = this.state.products;
        FirebaseError.collection('produits').onSnapshot(snapshot=>{
            let changes = snapshot.docChanges();
            changes.forEach(change=>{
                if(change.type==='added'){
                    prevProducts.push({
                        id: change.doc.id,
                        nom: change.doc.data().nom,
                        prix: change.doc.data().prix,
                        image: change.doc.data().image,

                    })
                }
            })

        })
    }
    render(){
        return(
            <ProductsContext.Provider value={{products:[...this.state.products]}}>
                {this.props.children}
            </ProductsContext.Provider>
 
        )
    }
}

