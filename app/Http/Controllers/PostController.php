<?php

namespace App\Http\Controllers;

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

    public function create_post(){
        
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