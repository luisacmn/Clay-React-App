import React from 'react';
import { useEffect, useState, useCallback} from 'react';
import { saveData, getData, deleteData} from './requests';

function App() {
    
    // //GET data from the db and store it in a state
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {                                                               //setar o state com os dados recebidos do db
        getData().then(res => {
            setPosts(res.items);
        })
    }, []);


    //POST data into a db. Submit chama a funcao do POST(saveData)
    const [headline, setHeadline] = useState("")
    const [articleBody, setArticle] = useState("")
    const [id, setid] = useState(counter)
    const [counter, setCounter] = useState(0)

    const handleSubmit = useCallback(() => {
        setCounter(counter + 1)
        
        setPosts([                                                                  //LOCAL STATE
            ...posts,                                                      
            {                                                              
                id: id, 
                headline: headline, 
                articleBody: articleBody
            }   
        ])

        saveData({                                                                  //DB
            id,
			headline,
			articleBody,
		}).then(() => {
            setid('')
			setHeadline('');
			setArticle('');
		});
	},
	[
		saveData,
        id,
		headline,
		articleBody
	]);
  


    //DELETE data from a database
    const handleDelete = useCallback((id) => {                                                //o id 'e um parametro que pode receber qualquer valor. Quando houver o map, tera o valor post.id
        console.log(id)

        deleteData(id).then(res => {                                                           //DB
        console.log(res)
        getData
       })

       setPosts(posts.filter( el => el.id !== id))                                              //Local State
    },[posts])

   
    
    return (    
        <div>   
            <h1>Hello World</h1>

            <label>Title</label>
            <input type="text" name="headline" value={headline} onChange={(e) => { setHeadline(e.target.value) }}></input>
            <label>Content</label>
            <input type="text" name="articleBody" value={articleBody} onChange={(e) => { setArticle(e.target.value) }}></input>
            <button onClick={handleSubmit}>Submit</button>

            <div>
                <h1>Users:</h1>
                {posts.map((post,index) => (
                    <div key={index}>
                        <h5>{post.headline}</h5>
                        <p>{post.articleBody}</p>
                        <button onClick={() => handleDelete(post.id)} value={post.id}>Delete</button>
                        <button onClick={() => handleEdit(post.id)} value={post.id}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;