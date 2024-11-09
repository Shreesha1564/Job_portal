import React from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
// Import Button and Pen (make sure they are available)
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'; // Replace with the correct path to the Pen icon
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'

const skills = ["Html", "CSS", "JavaScript", "ReactJs"]
const Profile = () => {
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pinimg.com/736x/3c/54/43/3c5443db6923a6e2ea061d7934b1d947.jpg" alt="profile" />
            </Avatar>
            <div>
              <h1 className='text-xl'>Full name</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, autem voluptas asperiores, is.</p>
            </div>
          </div>

          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3' my-2>  <Mail />
            <span>patel@gmai.com</span>
          </div>
          <div className='flex items-center gap-3' my-2>
            <Contact />
            <span>8365497523</span>

          </div>
        </div>
        <div className='my-5'>
          <h1 >Skills</h1>
          <div className="flex items-center gap-1">
            {
              skills.length !== 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className='text-md font-bold'>Resume</Label>
          {
            isResume ? <a
              target="_blank"
              href="https://youtube.com/@patelmernstack"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Patel Mern Stack
            </a> :
              <span>NA</span>
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
        <h1 className='font-bold text-lg my-5'>Applied jobs</h1>
        {
            /*Application table*/}


        <AppliedJobTable />


      </div>

    </div>

  );
};

export default Profile;
