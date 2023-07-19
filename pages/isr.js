import Card from "@/components/Card";
import { fetchData } from "@/utils/fetch";

const ISRPage = ({ data }) => {
  return (
    <div className="text-center text-gray-700 flex flex-col gap-4 ">
      <h1 className="font-bold text-xl">SSG Page</h1>
      <p className=" font-semibold text-sm">
        This page is rendered using Incremental Static Regeneration (ISR).
      </p>

      <div className="mt-10 flex flex-grow gap-4">
        {data.map((item) => (
          <Card user={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const data = await fetchData("/api/data");

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    return {
      props: {
        data: [],
      },
    };
  }
}

export default ISRPage;
