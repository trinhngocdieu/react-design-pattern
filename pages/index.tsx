
import Layout from "../components/core/Layout";
import ListDog from "../components/DogBreed/ListDog";

const IndexPage = () => {
  return (
    <Layout title="Dog List">
      <h1>Dog List</h1>
      <ListDog />
    </Layout>
  );
}
export default IndexPage;
