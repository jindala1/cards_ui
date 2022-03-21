const ListCards = ({ card, listCards }) => {
    return (
        <form className='listForm' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='list'>Search</label>
            <input
                id='list'
                type='text'
                role='searchbox'
                placeholder='List Cards'
                value={card}
                onChange={(e) => listCards(e.target.value)}
            />
        </form>
    )
}

export default ListCards
