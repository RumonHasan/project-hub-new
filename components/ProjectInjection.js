import { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, Select, FileInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons";

const ProjectInjection = ()=>{  
    const [formValues, setFormValues] = useState({});
    // handle form
    const projectForm = useForm({
        initialValues:{
            name: '',
            category: '',
            link: '',
            description: '',
            stack:''
        }
    });
    // select
    const [selectValue, setSelectValue] = useState('');
    const selectData = [
        'React JS',
        'Vanilla JS',
        'HTML/CSS'
    ]


    // function handlers
    const handleImageFile = ()=>{

    }
    const handleStack = ()=>{

    }

    const handleSubmit = ()=>{
        
        console.log(pr)
        try{

        }catch(error){
            console.log(error);
        }
    }

    return (
        <Box sx={{maxWidth: 400}} mx='auto'>
            <form onSubmit={projectForm.onSubmit((values)=> setFormValues(values))}>
                <TextInput
                    label='Name'
                    placeholder="Enter Project Name"
                    {...projectForm.getInputProps('name')}
                />
                
                
                <TextInput
                    label='Category'
                    placeholder="Enter Project Category"
                    {...projectForm.getInputProps('category')}
                />

                <FileInput
                    placeholder="Pick an Image file"
                    label='Upload an image'
                    accept="image/png,image/jpeg"
                    icon={<IconUpload size={14}/>}
                />

                <Select
                    label='Select the Tect Stack'
                    placeholder="Choose The Tech Stack"
                    searchable
                    nothingFound='Stack not Available'
                    data={selectData}
                    {...projectForm.getInputProps('stack')}
                />

                <TextInput
                    label='Link'
                    placeholder="Enter Project Link"
                    {...projectForm.getInputProps('link')}
                />

                <TextInput
                    label='Description'
                    placeholder="Enter Project Description"
                    {...projectForm.getInputProps('description')}
                />
                <Group position="right" mt='md'>
                    <Button type='submit'>Submit Project</Button>
                </Group>
            </form>
        </Box>
    )
}
export default ProjectInjection;