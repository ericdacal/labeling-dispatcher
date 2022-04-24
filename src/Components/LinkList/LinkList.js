import "./LinkList.css"




function LinkList(props) {
    const links = props.links
    const names = props.names
    return(
        <table className="linksTable">
            <tbody>
                <tr>
                    <th>Links</th>
                </tr>
                {
                    Object.keys(links).map(function(key) {
                        return (
                            <tr>
                                <th>
                                    <a href={links[key]}> {names[key]} </a>
                                </th>
                                <th>
                                    <input type="checkbox"></input>
                                </th>
                            </tr>
                        )
                    }.bind(this))
                }
            </tbody>
        </table>
    )
}


export default LinkList;