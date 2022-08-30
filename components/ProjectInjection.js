import { useState } from "react";
const ProjectInjection = ()=>{  
    // states
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [stack, setStack] = useState([]);
    const [singleTechStack, setSingleTechStack] = useState('');

    // styles
    const injectionStyles = {
        display:'flex',
        flexDirection: 'column',
        maxWidth: '50%',
        justifyContent:'center',
        alignItems: 'center'
    }
    const formStyles = {
        display:'flex',
        flexDirection: 'column',
    }

    // function handlers
    const handleImageFile = ()=>{

    }
    const handleStack = ()=>{

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        try{

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div style={injectionStyles}>
            <div style={formStyles}>
                <input type='text' placeholder="name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <input type='text' placeholder="category" value={category} onChange={(e)=> setCategory(e.target.value)}/>
                <input type='text' placeholder="link" value={link} onChange={(e)=> setLink(e.target.value)}/>
                <input type='text' placeholder="description" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <input type='text' placeholder="stack" value={singleTechStack} onChange={(e)=>setSingleTechStack(e.target.value)}/>
                <input type='file' placeholder="image" accept='image/*' onChange={handleImageFile}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            
        </div>
    )
}
export default ProjectInjection;