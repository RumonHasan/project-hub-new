import { PrismaClient } from "@prisma/client";
import { METHODS } from "../utils/crud";

const prisma = new PrismaClient();

// create project entry
const createProjectEntry = async (req, res)=>{
  const body = req.body;
  try{
    const newProject = await prisma.projectDetails.create({
      data:{
        name: body.name,
        image: body.image,
        category: body.category,
        link: body.link,
        description: body.description,
        stack: body.stack
      }
    });
    return res.status(200).json(newProject, {success:true});
  }catch(error){
    res.status(500).json({error:'Unable to create a new Project Entry', success: false});
  }
}

// get project details
const getProjectDetails = async (req, res)=>{
  try {
    const projects = await prisma.projectDetails.findMany();
    return res.status(200).json(projects, {success: true});
  }catch(error){
    res.status(500).json({error: 'Unable to get projects', success: false});
  }
}

const mainHandler = async(req, res)=>{
  if(req.method === METHODS.post){
    return await createProjectEntry(req, res);
  }else if(req.method === METHODS.get){
    return await getProjectDetails(req, res);
  }
}

export default mainHandler;