import AccountProfile from '@/components/forms/AccountProfile'
import {currentUser} from '@clerk/nextjs'




async function page () {

  const user = await currentUser()
  const userInfo = {}

  const userData = {
   id: user?.id,
   ObjectId: userInfo?._id,
   username: userInfo?.username || user?.username,
   name: userInfo?.name || user?.firstName || "",
   bio: userInfo?.bio || "",
   image: userInfo?.image || user?.imageUrl,
  }


  return (
    <main>
      <h2 className="text-teal-200">Onboarding</h2>
      <p className="text-teal-200">complete your profile now to use threads</p>
    <section className="mt-5 bg-teal-300 p-10">
      <AccountProfile user={userData} btnTitle="continue"/>
    </section>
    </main>
  )
}

export default page