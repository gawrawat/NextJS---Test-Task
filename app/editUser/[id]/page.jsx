export default function EditUser(){
     return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
                            Telephone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="telephone"
                            type="tel"
                            placeholder="Telephone number"
                        />
                    </div>
    
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>
    
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                            Address
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address"
                            placeholder="Address"
                            rows="3"
                        ></textarea>
                    </div>
    
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        );
    }
