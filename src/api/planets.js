export default class PlanetsApi {
    
    static async getAll() {
        return await this.obtain({
            condicoes: {}
        });
    }

    static async getBySlug(slug) {
        return await this.obtain({
            condicoes: { slug }
        });
    }

    static async obtain(json) {
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(json),
            redirect: 'follow'
          };
          
          try {
            var response = await fetch("https://sistemasolar.docapi.dev/planetas/obter", requestOptions);
            var responseJson = await response.json();
            if (response.ok) {
                // Requisão foi um sucesso!
                // A partir desse trecho você pode implementar o seu codigo que irá pegar os dados da api e colocar no front-end por exemplo.
                return(responseJson?.resposta || responseJson);
          
            } else {
              throw new Error(response);
            }
          } catch (error) {
            console.error(error);
            console.log("Error: ", error);
            throw error;
          }
    }
}