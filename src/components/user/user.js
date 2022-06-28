
function User({item, userButton}) {
    return (
        <div>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <button onClick= { () => userButton(item)}>User Details</button>
        </div>
    );
}

export {User};