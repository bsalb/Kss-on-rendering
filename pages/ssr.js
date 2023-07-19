import Card from "@/component/Card";
import { fetchData } from "@/utils/fetch";

const SSRPage = ({ data }) => {
  return (
    <div className="text-center text-gray-700 flex flex-col gap-4 ">
      <h1 className="font-bold text-xl">SSR Page</h1>
      <p className=" font-semibold text-sm">
        This page is rendered using Server-Side Rendering (SSR).
      </p>

      <div className="mt-10 flex flex-grow gap-4">
        {data.map((item) => (
          <Card user={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const data = await fetchData("/api/data");

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}

export default SSRPage;
