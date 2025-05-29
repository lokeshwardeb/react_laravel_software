<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function show()
    {
        return Inertia::render('Test', [
            'user' => 'protik'
        ]);
    }

    public function create_post(Request $request, Post $post_db){
        // if(isset($_POST['create_post'])){
            $validate = $request->validate([
                'post_name' => 'required'
            ]);
            $post_db->post =  $request->post_name;

            $post_db->save();

            if($post_db->save()){

                // to_route('home');

                 return redirect()->route('home')->with('msg', 'The post has been created successfully!');

                // return inertia('Home', [
                //     'msg' => 'The post has been created successfully !!'
                // ]);
                
            }else{

                // to_route('home');
                
                 return redirect()->route('home')->with('msg', 'The post could not be created.');

                //  return inertia('Home', [
                //     'msg' => 'The post has not been created successfully !!'
                // ]);
            }
        // }
    }

}


// use Inertia\Inertia;

// class EventsController extends Controller
// {
//     public function show(Event $event)
//     {
//         return Inertia::render('Event/Show', [
//             'event' => $event->only(
//                 'id',
//                 'title',
//                 'start_date',
//                 'description'
//             ),
//         ]);
//     }
// }