export default function List<T extends { id: number }>({
    list,
    Item,
    separator,
}: {
    list: T[]
    Item: React.ComponentType<T>
    separator?: React.ReactNode
}) {
    return (
        <ul className="list">
            {
                list.map((item, index) => {
                    return (
                        <li key={item.id} className="list__item">
                            <Item {...item} />
                            {
                                (separator && list.length - 1 !== index) &&
                                <div className="list__separator">{separator}</div>
                            }
                        </li>
                    );
                })
            }
        </ul>
    );
}