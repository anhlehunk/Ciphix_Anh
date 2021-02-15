// Intent name: Default Fallback Intent
export const fallback = (conv: any) => {
    
    return conv.add(
        `I'm sorry, i didn't understand your request. To have an overview of the information I can provide, type "help"`
    )
}