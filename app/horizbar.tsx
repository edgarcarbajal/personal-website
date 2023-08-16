const HorizBar = ({middleInsertChild, middleInsertStr}: {middleInsertChild?: React.ReactNode, middleInsertStr: string}) => {
    return (
        <div className={'h-5 border-b-4 border-black dark:border-white text-2xl text-center'}>
            <span className={'bg-white dark:bg-slate-800 rounded-lg px-5 ring-4 ring-red-400'}>
                {middleInsertChild !== undefined ? middleInsertChild : middleInsertStr}
            </span>
        </div>
    );
};

export default HorizBar;