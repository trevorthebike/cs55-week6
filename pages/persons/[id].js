import Layout from '../../components/layout';
import { getResourcesData, getResourcesIds } from "../../lib/persons";

export async function getStaticPaths(){
    const paths = await getResourcesIds();
    return{
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const itemData = await getResourcesData(params.id);
    // console.log(itemData);
    return {
      props: {
        itemData
      }
    };
  }


  export default function Entry({ itemData }) {
    return (
      <Layout>
        <article className="card col-6">
          <div className="card-body">
          {itemData.data.name ? 
            <h3>{"Name: " + itemData.data.name}</h3>: null
          }
          {itemData.data.favorite ? 
            <h3>{"Favorite: " + itemData.data.favorite}</h3>: null
          }
          {itemData.data.phone ? 
            <h3>{"Phone: " + itemData.data.phone}</h3>: null
          }
          {itemData.data.birthdate ? 
            <h3>{"Birthdate: " + itemData.data.birthdate}</h3>: null
          }
          {itemData.data.email ? 
            <h3>{"Email: " + itemData.data.email}</h3>: null
          }
          </div>
        </article>
    </Layout>
    );
  }
