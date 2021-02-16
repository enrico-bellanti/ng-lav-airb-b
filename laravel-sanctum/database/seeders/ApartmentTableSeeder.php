<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Apartment;

class ApartmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $houses=[
            [
                'title'=>'Villa Gordiani',
                'description'=>'stupenda casa in campagna',
                'rooms_number'=>5,
                'price'=>50.50,
                'img'=>'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg'
            ],
            [
                'title'=>'Villa Grazioli',
                'description'=>'open-space in centro',
                'rooms_number'=>2,
                'price'=>45.20,
                'img'=>'https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg'
            ],
            [
                'title'=>'Casa Murroni',
                'description'=>'B&b ben collegato',
                'rooms_number'=>1,
                'price'=>20.50,
                'img'=>'https://www.inexhibit.com/wp-content/uploads/2018/06/Darwin-Martin-House-Frank-Lloyd-Wright-Buffalo-NY-01b.jpg'
            ],
            [
                'title'=>'Angolo Property',
                'description'=>'bilocale luminoso',
                'rooms_number'=>2,
                'price'=>39.60,
                'img'=>'http://hallofseries.com/wp-content/uploads/2016/02/image-128.jpg'
            ],
        ];
        $users = User::all();
        $counter = 0;
        foreach ($users as $user) {
            for ($i=0; $i < 2; $i++) { 
                $apartment = new Apartment;
                $house = $houses[$counter];
                $apartment->user_id = $user->id;
                $apartment->title = $house['title'];
                $apartment->description = $house['description'];
                $apartment->rooms_number = $house['rooms_number'];
                $apartment->price = $house['price'];
                $apartment->img = $house['img'];
                $apartment->save();
                $counter++;
            }
        }
    }
}
