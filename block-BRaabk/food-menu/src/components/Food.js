import Data from "../data.json";
function Food(props) {
    var itemList = Data.filter(item => {
        if (props.type.toLowerCase() == "all") {
            return item;
        }
        else {
            return item.category == props.type.toLowerCase();
        }
    })
    console.log(itemList);
    return (
        <>
            <section>
                <article className="flex flex-wrap">
                    {itemList.map((item) => (
                        <div className="flex flex-45 mx-3 mb-8">
                            <div>
                                <img className="border-4 border-secondary  w-72 h-56" src={item.img} />
                            </div>
                            <div className="ml-6">
                                <div className="flex justify-between">
                                    <h2 className="text-2xl text-primary">{item.title}</h2>
                                    <h3 className="text-2xl text-secondary">{item.price}</h3>
                                </div>
                                <hr className="border-dotted border-2 text-secondary" />
                                <p className="mt-5">{item.desc}
                                </p>
                            </div>
                        </div>
                    ))}


                </article>
            </section>
        </>
    )
}

export default Food;