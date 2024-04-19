const Allgroups = () => {
    

    return (
        <div className='grid groupsClass grid-cols-1 max-h-[80vh] overflow-y-scroll gap-4 col-span-6'>
            <div className='pr-5 border'>
                <form>
                    <input type="text" placeholder='Search groups' className='py-2 px-3 rounded-full w-full outline-none my-3 border' />
                </form>
            </div>
            {/* <div className='space-y-5'>
                {
                    data.map((item: {
                        [x: string]: any; _id: React.Key | null | undefined; groupPic: string | StaticImport; groupName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined;
                    }) => (
                        <div key={item._id} className='border w-full gap-5 justify-between flex  p-3'>
                            <Image className='rounded-md' width={100} height={100} src={item?.groupPic} alt="GroupPIc" />
                            <div className='h-32 w-full whitespace-pre-wrap text-ellipsis overflow-hidden'>
                                <h1 className='text-3xl font-medium'>{item?.groupName}</h1>
                                <div className='flex items-center gap-5'>
                                    <h1 className='font-medium'>Education</h1>
                                    <h3>Members: {item?.members?.length}</h3>
                                    <p>Created At: {item?.createAt.slice(0, 10)}</p>
                                </div>
                                <p className=''>{item?.description}</p>
                                
                            </div>
                            <Link href={`/home/groups/${item?._id}`}>View Group</Link>
                        </div>
                    ))
                }
            </div>   */}
        </div>
    );
};

export default Allgroups;