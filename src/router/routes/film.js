import Films from '@/views/movies/Films'
import NowPlaying from '@/views/movies/NowPlaying'
import ComingSoon from '@/views/movies/ComingSoon'
import Detail from '@/views/movies/Detail'
var filmRouter=[
    {
        path:"/films",
        component:Films,
        children:[
          {path:"nowPlaying",component:NowPlaying},
          {path:"comingSoon",component:ComingSoon}
        ]
      },
      {
        path:"/film/:id",
        component:Detail
      }
]

export default filmRouter