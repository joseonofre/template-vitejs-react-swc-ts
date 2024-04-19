import useSWR from "swr";
import fetcher from "@/services/api";

export default function HomePage() {
    const { data, error } = useSWR('/', fetcher, { suspense: true });
    console.log(data, error);

    return (
        <div className="container flex flex-col flex-1">
            <div className="bg-green-100 flex-1 p-5">
                <h1 className="text-2xl my-10"><strong>Home</strong></h1>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Id
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nome
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Data
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.lista?.map((item: any) => {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item?.Id}>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {item?.Id}
                                            </th>
                                            <td className="px-6 py-4">
                                                {item?.Nome}
                                            </td>
                                            <td className="px-6 py-4">
                                                {item?.Data}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}