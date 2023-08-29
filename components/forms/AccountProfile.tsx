'use client'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver }from '@hookform/resolvers/zod'
import * as z from 'zod'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { UserValidation } from '@/lib/validations/user'
import { useForm } from "react-hook-form"
import { isBase64Image } from "@/lib/utils"


interface Props{
  user: {
    id: string;
    ObjectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  }
  btnTitle: string;
}

const AccountProfile = ({user, btnTitle}: Props) => {
  const [files, setFiles] = useState<File[]>([])

  const form = useForm({
    resolver: zodResolver(UserValidation),
     defaultValues: {
      profile_photo: user?.image ||"",
      name: user?.name || "",
      username: user?.username,
      bio: user?.bio || ""
      }
    
  })



 const handleImage = (
  e:ChangeEvent<HTMLInputElement>, 
   fieldChange: (value:string) => void) => {
    e.preventDefault()

    const fileReader = new FileReader()

    if(e.target.files && e.target.files.length ) {
      const file = e.target.files[0]

      setFiles(Array.from(e.target.files))

      if(!file.type.includes('image')) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || '';

        fieldChange(imageDataUrl)
      }
      fileReader.readAsDataURL(file)
      
    }
    }

 
function onSubmit (values: z.infer<typeof UserValidation>) {
 const blob = values.profile_photo

 const hasImageChanged = isBase64Image(blob)
}


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>

      {/* //*FORMFIELD 1 */}
        <FormField
         control={form.control}
         name="profile_photo"
         render={({field}) => (
          <FormItem>
            <FormLabel>
              {field.value ? (
                <Image
                src={field.value}
                alt="profile photo"
                width={96}
                height={96}
                priority
                className=""
                />
              ) : (
                <Image
                src="/assets/profile.svg"
                alt="profile photo"
                width={24}
                height={24}
                />
              )}
            </FormLabel>
            <FormControl>
               <Input
                type="file"
                accept="image/*"
                placeholder="upload a photo"
                 className=""
                 onChange={(e) => handleImage(e, field.onChange)}
                />


            </FormControl>
          </FormItem>
         )}
        />
 


   {/* //*NAME- FORMFIELD 2 */}
   <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-3'>
              <FormLabel className='text-base-semibold text-light-2'>
                Name
              </FormLabel>
              <FormControl>
                <Input
                  type='text'
                  className='account-form_input no-focus'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />



      {/* //*USERNAME FORMFIELD 3 */}
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem className="flex items-center gap-4">
            <FormLabel className="text-base-semibold text-light-2">
            Username
            </FormLabel>
            <FormControl className="flex-1 text-base-semibold text-gray-200">
              <Input 
               type="text"
               className='account-form_input no-focus'
               {...field}
               />
            </FormControl>
          </FormItem>
        )}
      />


      {/* //*BIO- FORMFIELD 4 */}

      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem className="flex items-center gap-4">
            <FormLabel className="text-base-semibold text-light-2">
              Bio
            </FormLabel>
            <FormControl className="flex-1 text-base-semibold text-gray-200">
              <Textarea
               rows={10}
               className="account-form_input no-focus"
               {...field}
               />
            </FormControl>
          </FormItem>
        )}
      />
      <Button className="bg-teal-300 " type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default AccountProfile