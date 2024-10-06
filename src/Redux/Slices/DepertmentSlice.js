import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axiosInstance";
import toast from "react-hot-toast";
const initialState={
    imageDetails:[],
}
export const   getDepartmentImage=createAsyncThunk('/department/getImage',async(data)=>{
try{
     const  DepartmentImages=await axiosInstance.get('/user/department');
    if(DepartmentImages.data.success){
        toast.success("Successfully Loaded Department Images!!")
    }
    else toast.error("Can't Load Department images !!!")

    return DepartmentImages?.data?.data?.response;

}
catch(error){
console.log(error);
console.log("Something Went Wrong!!!");
}
})

export const UploadDepartmentIamge=createAsyncThunk('/admin/department/imageUpload',async(data)=>{
    try{
    const response=await axiosInstance.post('/admin/departments',data);
    if(!response){
        toast.error("Unable to upload Image!!!")
        return;
    }
    toast.success("Successfully upload Image!!!")
    const apiResponse=await response;
    return apiResponse ;
    
    }
    catch(error){
    console.log(error)
    console.log("Unable to upload Event Image!!!");
    }
    })

    export const DeleteDepartmentIamge=createAsyncThunk('/admin/departments/imageDelelte',async(data)=>{
        try{
        const response=await axiosInstance.delete(`/admin/departments/${data.name}/${data.objectID}`);
        if(!response){
            toast.error("Unable to delete Image!!!")
            return;
        }
        toast.success("Successfully remove Image!!!")
        const apiResponse=await response;
        return apiResponse ;
        }
        catch(error){
        console.log(error)
        console.log("Unable to remove Event Image!!!");
        }
        })
        
    

        export const ChangeDepertmentName=createAsyncThunk('/admin/departments/changeName',async({oldName,newName})=>{
            try{
            const response=await axiosInstance.post(`/admin/departments/${oldName}/${newName}`);
            if(!response?.payload?.data?.success){
                toast.error("Unable to Change Name!!!")
                return;
            }
            toast.success("Successfully Change Name!!!")
            const apiResponse=await response;
            return apiResponse ;
            
            }
            catch(error){
            console.log(error)
            console.log("Unable to upload Departments Name!!!");
            }
            })
            


const DepartmentImageSlice=createSlice({
    name:'DepartmentImage',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder
.addCase(getDepartmentImage.fulfilled,(state,action)=>{
    state.imageDetails=action?.payload;
    console.log("This is Department Images in Deaprtments--->",state.imageDetails);
})
    }

})


export default DepartmentImageSlice.reducer;

