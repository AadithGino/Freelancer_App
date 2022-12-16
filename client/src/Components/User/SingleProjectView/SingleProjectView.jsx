import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userSingleProjectAction } from '../../../REDUX/Actions/userActions';
import ClinetNavbar from '../Navbar/ClinetNavbar';

function SingleProjectView(props) {
  const dispatch = useDispatch()
  const project = useSelector(state => state.userSingleProject)
  useEffect(()=>{
    dispatch(userSingleProjectAction("hu"))
  },[])
  const {loading,data,error} = project
  
    console.log(props); 
  return (
    <div>
      <ClinetNavbar/>
      <h1>Project Details</h1>
      {
        data ? <div>
          <h3>Title : {data.title}</h3>
          <h3>Description : {data.description}</h3>
        
        <h2>Freelancers Who Have Applied</h2>
          {
            data.freelancers ? data.freelancers.map((obj)=>{
              return(
              <div>
                <hr />
                <h3>Name : {obj.users[0].Name}</h3>
              <h3>Email: {obj.users[0].email} </h3>
              <h3>Number: {obj.users[0].number} </h3>

              <hr />
              </div>
              )
            }) :'sdf'
          }
          
        </div> : 'asdasd'

      }
    </div>
  )
}

export default SingleProjectView
