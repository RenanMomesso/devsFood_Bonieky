let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        const res = await fetch(BASE+'/categories')
        const json = await res.json();
        return json;
    },
    getProducts: async (category,page,search) => {

        let fields = {};
        if(category !== 0){
            fields.category = category;
        }

        if(page !== 0){
            fields.page = page
        }
        if(search !== ''){
            fields.search = search;
        }
        //para transformar este fields em query-string
        //{category:2, page:1, search:'bolo'}
        //para query string assim:
        //category=2&page=1&search=bolo
        //se usa uma biblioteca javascript

        let queryString = new URLSearchParams(fields).toString()




        const res = await fetch(BASE+'/products?'+queryString)
        const json = res.json();
        return json;
    }
}