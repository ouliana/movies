function Preloader() {
    // return <div className="progress">
    //             <div className="indeterminate"></div>
    //         </div>

    return (
        <div className='preloader-wrapper big active'>
            <div className='spinner-layer'>
                <div className='circle-clipper left'>
                    <div className='circle'></div>
                </div>
                <div className='gap-patch'>
                    <div className='circle'></div>
                </div>
                <div className='circle-clipper right'>
                    <div className='circle'></div>
                </div>
            </div>
        </div>
    );
}

export default Preloader;
