export default function UserList() {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <div className='container mx-auto p-8'>
              <div className='flex flex-col items-center bg-white rounded-lg shadow-lg p-8'>
                <h1>Profile</h1>
                {/* image */}
                <img
                  src={user.profileImg}
                  alt={`${user.intra}'profile`}
                  width={150}
                  height={150}
                  className='rounded-full'
                />
                {/* intra name */}
                <h1 className='text-3xl ont-bold mt-4'>Intra Name: {user.intra}</h1>

                {/* Description */}
                <p className='text-gray-600 mt-2 text-center'>
                  Background: {user.profileDescription}
                </p>

                {/* posts */}
                <p className='text-gray-600 mt-2 text-center'>Posts: {user.posts}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}