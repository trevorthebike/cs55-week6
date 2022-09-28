import { getResourcesData, getResourcesIds } from "../../lib/resources";

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
    console.log(itemData);
    return (
      <article className="card col-6">
        <div className="card-body">
          <h5 className="card-title">{itemData.data.name}</h5>
          <p className="card-text">{itemData.data.description}</p>
          {itemData.data.url ?
            <a className="btn btn-primary" href={itemData.data.url}>Link out</a>
            : null
          }
        </div>
      </article>
    );
  }