import AccountProfile from '@/components/forms/AccountProfile'
import { currentUser} from '@clerk/nextjs'

async function Onboarding () { 
  const user = await currentUser()

  const userInfo = {}

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="font-bold">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">complete your profile now to use RQ</p>  
      <section className="mt-9 bg-test2 p-10 border border-teal rounded">
        <AccountProfile
         user={userData}
         btnTitle="Continue"
        />
      </section>
    </main>
  )
}

export default Onboarding