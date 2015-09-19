$(function () {

    var graffiti_data = {
        'cement_graffiti_latlong': [[41.910805844416167, -87.69715953172458],
          [41.958037430426174, -87.738153437268167],
          [41.857877567005957, -87.667825195630201],
          [41.857880647201647, -87.667602526352411],
          [41.958150531081479, -87.738159511525225],
          [41.95820708140824, -87.738162548660952],
          [41.957915536119387, -87.738441244740187],
          [41.833586787116168, -87.685331461949161],
          [41.857878593785841, -87.667750972539366],
          [41.957885347130741, -87.738439623209928],
          [41.957681270694891, -87.73842867954491],
          [41.957749278684844, -87.738432315085504],
          [41.957504097115155, -87.738418266679361],
          [41.957647284796856, -87.738426865446797],
          [41.910355626550633, -87.678562494343339],
          [41.899390645153545, -87.65677424150951],
          [41.924293445048193, -87.77709584834858],
          [41.898017693125681, -87.662307155376581],
          [41.890102210410831, -87.628157226975276],
          [41.92571393189651, -87.778066850541521],
          [41.931924343764976, -87.712381385897046],
          [41.964247879885335, -87.748993870221653],
          [41.889234518566354, -87.637432537021311],
          [41.925857642170641, -87.756357565295431],
          [41.910213568444107, -87.687071553818086],
          [41.910214985394951, -87.686986865427556],
          [41.910217645039957, -87.686817760033492],
          [41.91021894284313, -87.68673306821745],
          [41.871629118719419, -87.737590813330954],
          [41.921033762503818, -87.694534338540777],
          [41.937329122332152, -87.756788899118092],
          [41.91021894284313, -87.68673306821745],
          [41.958277089605438, -87.744130669231112],
          [41.957614067963547, -87.743787688928762],
          [41.943259637668454, -87.730450878063948],
          [41.910213568444107, -87.687071553818086],
          [41.957235491982225, -87.74359148660362],
          [41.95701690509734, -87.743477914653582],
          [41.957067654607684, -87.743504371967177],
          [41.959118281810319, -87.744568882708052],
          [41.958560901206106, -87.744278497119367],
          [41.958418994928614, -87.744204580368361],
          [41.917370078070327, -87.698249259556789],
          [41.919382421536689, -87.691823974329509],
          [41.920921282115494, -87.694348808177494],
          [41.924682399730244, -87.719501835371915],
          [41.935342155480491, -87.743171574340863],
          [41.974762785097212, -87.706064626822936],
          [41.951448547015453, -87.727693387555604],
          [41.953257761340438, -87.751956908253291],
          [41.826247926352941, -87.702190256504551],
          [41.899418699446969, -87.682191771674198],
          [41.792353320310049, -87.580434462924046],
          [41.910835554161736, -87.660932235470199],
          [41.940367911671096, -87.707506630019068],
          [41.953263150301019, -87.75123986721421],
          [41.845887485296224, -87.710093668092043],
          [41.689105712151225, -87.606069115875059],
          [41.709450604864365, -87.608803834404085],
          [41.888224476143712, -87.624378143238843],
          [41.911700944024773, -87.735251514729171],
          [41.754795608154616, -87.563719390728622],
          [41.918950310238031, -87.721570420720994],
          [41.909609590144051, -87.677294333403665],
          [41.906352933408073, -87.634710452624077],
          [41.925846626659215, -87.756946325359692],
          [41.968406615083893, -87.700935331767198],
          [41.949937556521505, -87.713454828064201],
          [41.913250323502176, -87.728734614914799],
          [41.968405790449296, -87.701006562950823],
          [41.909360703650968, -87.667507265578593],
          [41.968628747675098, -87.700707849979167],
          [41.880830009724392, -87.726099120560193],
          [41.968628747675098, -87.700707849979167],
          [41.953258983814735, -87.75188718116371],
          [41.9532599386283, -87.751814817637523],
          [41.968630083850002, -87.700556475567595],
          [41.913409365910589, -87.72903378605551],
          [41.884900560578814, -87.628067099061425],
          [41.828521777127584, -87.687188064881553],
          [41.780332936836203, -87.725677276781965],
          [41.828301933548993, -87.687192973375801],
          [41.828362551314747, -87.682560942682159],
          [41.828371220323007, -87.682643048660253],
          [41.828590696317072, -87.68263622319742],
          [41.968631849043192, -87.700328760480346],
          [41.957067654607684, -87.743504371967177],
          [41.910216347174284, -87.686902451846862],
          [41.956864656528637, -87.74339854296224],
          [41.831226983161685, -87.677893664305472],
          [41.861460756653813, -87.66401160294869],
          [41.915623498741773, -87.754415603134021],
          [41.915923417757476, -87.754428925883175],
          [41.906886742815118, -87.673345474390601],
          [41.906657377179592, -87.671871124322664],
          [41.909950557589113, -87.677024367166695],
          [41.844292344721595, -87.713413326649672],
          [41.909906912161475, -87.677302645934063],
          [41.930750691735774, -87.709927897022837],
          [41.90623660501344, -87.671213348394559],
          [41.906104868334118, -87.671006754755382],
          [41.916939590330536, -87.68782832298885],
          [41.927729206394154, -87.75642730488498],
          [41.930677906585849, -87.709808634941524],
          [41.859962971704284, -87.65080811691189],
          [41.86167277327943, -87.651017833784962],
          [41.913389665478213, -87.752936946153909],
          [41.844430599129673, -87.719192086204131],
          [41.895632052157538, -87.686986867606137],
          [41.957673056637894, -87.793335971245099],
          [41.753476892362421, -87.704961135442261],
          [41.859980910104746, -87.649584549717773],
          [41.734963477742461, -87.555380963050283],
          [41.900858603016246, -87.66003363711701],
          [41.951475697203655, -87.72769428038157],
          [41.922227653694243, -87.679170675748182],
          [41.924286254771403, -87.715224077429696],
          [41.923425173444329, -87.71549113220739],
          [41.914720437932651, -87.752984342892589],
          [41.924629004972992, -87.705049968868863],
          [41.867517396342002, -87.627855540801292],
          [41.867511577013175, -87.628271323125318],
          [41.933091717828205, -87.714232734388816],
          [41.932721622693208, -87.713626596217111],
          [41.933335157886937, -87.714630614003866],
          [41.925731045217923, -87.696369794324511],
          [41.922273211732993, -87.668635278517471],
          [41.925333849028419, -87.696356767144167],
          [41.925519507795748, -87.696362916848074],
          [41.917561725556176, -87.701098228223614],
          [41.917563472323522, -87.700883191641296],
          [41.9353331281526, -87.743257620772908],
          [41.917562890125254, -87.700954870434614],
          [41.925269776510049, -87.696060345203421],
          [41.910304148649111, -87.699460432608916],
          [41.910875662727392, -87.698955687266917],
          [41.930714293738461, -87.709868260092662],
          [41.916920680092531, -87.675318717469068],
          [41.916478939760907, -87.686655649720706],
          [41.916514393368637, -87.686709900014947],
          [41.916864218958075, -87.675317343307441],
          [41.916751296687522, -87.67531459498953],
          [41.913398414293034, -87.75264324689941],
          [41.844417364515635, -87.720377795206801],
          [41.89813242641803, -87.652697651210289],
          [41.882084390194251, -87.631235384388447],
          [41.927666465363224, -87.756402490464225],
          [41.887705769119698, -87.624703858024617],
          [41.844566474901832, -87.70942890513399],
          [41.844095184180716, -87.728176146792407],
          [41.844431380689386, -87.71910750504658],
          [41.84421108027756, -87.719188458185769],
          [41.914244475964047, -87.752968284402385],
          [41.914007085436708, -87.752959890729656],
          [41.913294714654029, -87.752933325347996],
          [41.91700365800299, -87.749103339594598],
          [41.98000485300517, -87.664706102688854],
          [41.979946163784092, -87.664704486561902],
          [41.9395340396756, -87.692855094950559],
          [41.964247879885335, -87.748993870221653],
          [41.97153984004936, -87.745968331468518],
          [41.920915978434401, -87.726817165710685],
          [41.954513377973477, -87.660540221770034],
          [41.753519228934827, -87.671867351719087],
          [41.914003574151103, -87.696019728472123],
          [41.921361183830044, -87.696916440678649],
          [41.973431709402135, -87.68891939763455],
          [41.689105712151225, -87.606069115875059],
          [41.748709665164149, -87.732620314466701],
          [42.018180813558324, -87.681494994838957],
          [41.903079316895678, -87.677376575093064],
          [41.951900805813217, -87.708107455371916],
          [41.952014195876203, -87.708110752331862],
          [41.953826409946927, -87.708158863186057],
          [41.801190239855103, -87.72843601470791],
          [41.919906190561782, -87.669816134218735],
          [41.917343121176977, -87.700982393396316],
          [41.919868799120628, -87.669762267170796],
          [41.953284504804103, -87.767536878477884],
          [41.917341873340455, -87.70113599007459],
          [41.919906190561782, -87.669816134218735],
          [41.919868799120628, -87.669762267170796],
          [41.9224370207791, -87.673904794135481],
          [41.9224370207791, -87.673904794135481],
          [41.942716345820251, -87.737058001314793],
          [41.951962241179523, -87.726329918819616],
          [41.903958784857466, -87.679869503653407],
          [41.856816224766561, -87.679533989520166],
          [41.910875662727392, -87.698955687266917],
          [41.952297472488496, -87.764361539129766],
          [41.793251726601213, -87.691202427584443],
          [42.006684035768473, -87.672516472918986],
          [41.931526784113004, -87.687080059566725],
          [41.906104868334118, -87.671006754755382],
          [41.918322943313349, -87.690085907750031],
          [41.90771619778446, -87.673077642011776],
          [41.90786163996308, -87.673305186993687],
          [41.908342247845972, -87.674512365038026],
          [41.907590949622325, -87.67333372199856],
          [41.85786410467454, -87.631748368172552],
          [41.857638011029564, -87.669342431779114],
          [41.960656993305179, -87.743636892734074],
          [41.924482563171615, -87.699692865620804],
          [41.960815327408937, -87.729830667151504],
          [41.960655888076893, -87.74371915184993],
          [41.922510728219756, -87.687467606844478],
          [41.958942289869668, -87.681949756481799],
          [41.782187775751616, -87.724228487564616],
          [41.913554540340392, -87.651943609435534],
          [41.866696523611779, -87.688511819016711],
          [41.862940665238341, -87.68608143770021],
          [41.826377053599316, -87.685065140171645],
          [41.857459204831116, -87.683458474398066],
          [41.887551131700462, -87.617356008287473],
          [41.853983329085921, -87.669730288503928],
          [41.853984399047491, -87.669654332396206],
          [41.857457117011059, -87.683538631778603],
          [41.822984211439106, -87.685025823810193],
          [41.811545573850864, -87.684666523607945],
          [41.859969640188076, -87.645018657702451],
          [41.86003383930953, -87.645909678041036],
          [41.857644559499285, -87.668796124984723],
          [41.931283056765558, -87.773596938919525],
          [41.856936316472115, -87.6701153267107],
          [41.700355274179643, -87.720540896445527],
          [41.829496682679284, -87.680287770250402],
          [41.831226983161685, -87.677893664305472],
          [41.782841572740296, -87.72302398481294],
          [41.931540719014102, -87.754162560495459],
          [41.780549798258335, -87.724181861143251],
          [41.856716811065496, -87.670110589871612],
          [41.849817410781689, -87.640952532283208],
          [41.851027390659326, -87.638893479869935],
          [41.71535239926574, -87.552209238916191],
          [41.842247419390226, -87.660019296068654],
          [41.842271338369727, -87.660209673156359],
          [41.842287284362548, -87.660336591607802],
          [41.857841893289496, -87.68599815329209],
          [41.857867296567811, -87.668567426442223],
          [41.853921479822958, -87.685835423185495],
          [41.879104272305689, -87.686524788471942],
          [41.848845297763368, -87.675262717440148],
          [41.853921479822958, -87.685835423185495],
          [41.863833245980608, -87.688971040096021],
          [41.861126071501694, -87.68602986539041],
          [41.847660118891476, -87.6856641629726],
          [41.829462618669112, -87.679391565512347],
          [41.801297505871261, -87.678142139896238],
          [41.907383174185945, -87.673008662021445],
          [41.782904373618045, -87.723025814352212],
          [41.90771619778446, -87.673077642011776],
          [41.906104868334118, -87.671006754755382],
          [41.907424729614632, -87.673073673887899],
          [41.908342247845972, -87.674512365038026],
          [41.908270041659094, -87.674398679736768],
          [41.90623660501344, -87.671213348394559],
          [41.936883855688855, -87.71998857609762],
          [41.924113443799712, -87.699090500845585],
          [41.918447569300213, -87.689825748879244],
          [41.924668247488277, -87.699992361097657],
          [41.913770262524253, -87.711951329036083],
          [41.870757985900944, -87.754565777554205],
          [41.997741088423524, -87.694621938864103],
          [41.972010376211976, -87.705053795219598],
          [41.972010376211976, -87.705053795219598],
          [41.808273753293562, -87.68795316149442],
          [41.790772801308727, -87.632281202603323],
          [41.938500399646884, -87.739336414497302],
          [41.946452786112509, -87.744688445329757],
          [41.857453703710952, -87.685337765438689],
          [41.924556386663923, -87.699812623712788],
          [41.905973105174617, -87.670801628735347],
          [41.906017397705092, -87.67087005524948],
          [41.908234054174216, -87.674342198186991],
          [41.906060956025769, -87.670937890398051],
          [41.918417302962311, -87.69024016860088],
          [41.918448756132932, -87.690291588985687],
          [41.924593673636402, -87.69987253610455],
          [41.918354396552502, -87.690137327983052],
          [41.918228569267562, -87.689931511076054],
          [41.837003510238752, -87.723617165554231],
          [41.975361015671396, -87.677721623309523],
          [41.954111556841852, -87.691318323128399],
          [41.858165415909426, -87.649189520968079],
          [41.856991888622296, -87.666271858789869],
          [41.856608401472741, -87.627324998794307],
          [41.857678553177756, -87.683470557414054],
          [41.671799307234963, -87.632236555790172],
          [41.85780815621839, -87.658385096994721],
          [41.908256092217137, -87.673924380848774],
          [41.940367911671096, -87.707506630019068],
          [41.905752599363979, -87.670459497346172],
          [41.85224518559459, -87.67841788835031],
          [41.920304953825422, -87.798676078477513],
          [41.925134308391023, -87.661618897072003],
          [41.909773711862705, -87.676747944536444],
          [41.852434961268813, -87.651433937173692],
          [41.851706331359523, -87.720968959811884],
          [41.90818366887229, -87.673810943533624],
          [41.904817775067173, -87.668981174952265],
          [41.90661933439651, -87.671811625993058],
          [41.90616286567333, -87.670646023909839],
          [41.909278558756107, -87.675973940970351],
          [41.904817775067173, -87.668981174952265],
          [41.90661933439651, -87.671811625993058],
          [41.90450475662621, -87.668492693422408],
          [41.90786163996308, -87.673305186993687],
          [41.851908367483055, -87.702875988996524],
          [41.85206602451629, -87.691504771249356],
          [41.861568054908105, -87.656674707111932],
          [41.852652559845353, -87.640545816526782],
          [41.902290992049359, -87.669767794616305],
          [41.902446373027686, -87.668845944623342],
          [41.906298863455952, -87.670858334845889],
          [41.906657377179592, -87.671871124322664],
          [41.888621864838257, -87.68433122792969],
          [41.834282636838495, -87.675235453568291],
          [41.90661933439651, -87.671811625993058],
          [41.906332642194734, -87.670911307572723],
          [41.906366420909293, -87.670964280355491],
          [41.919208543288072, -87.697396906195721],
          [41.909738341123855, -87.676692654739298],
          [41.909278558756107, -87.675973940970351],
          [41.909702973407846, -87.67663736869801],
          [41.909207822611201, -87.675863370538195],
          [41.909243190696849, -87.675918655723706],
          [41.910523377632636, -87.681280157406022],
          [41.905752599363979, -87.670459497346172],
          [41.913305089122709, -87.711935692408829],
          [41.908256092217137, -87.673924380848774],
          [41.909773711862705, -87.676747944536444],
          [41.904299507857935, -87.668174902035332],
          [41.909278558756107, -87.675973940970351],
          [41.917985965703039, -87.677482526146989],
          [41.869428920198175, -87.66293977627403],
          [41.876645021096394, -87.735484842418117],
          [41.856081928089822, -87.66614042363922],
          [41.942130715657463, -87.752038120397401],
          [41.937636230406845, -87.798282988327728],
          [41.946957122412073, -87.744409499934832],
          [41.904299507857935, -87.668174902035332],
          [41.90797060799855, -87.67347639535005],
          [41.966811649546386, -87.678971832343947],
          [41.857863295170453, -87.655258052431392],
          [41.857947617507776, -87.654699479034704],
          [41.858083084687813, -87.655245989850783],
          [41.852587047242828, -87.654542970670491],
          [41.97309069468308, -87.70846034923612],
          [41.909773711862705, -87.676747944536444],
          [41.852736281457041, -87.647401033633514],
          [41.90818366887229, -87.673810943533624],
          [41.931526784113004, -87.687080059566725],
          [41.851982952775252, -87.68116969550492],
          [41.852673059155997, -87.663769311038678],
          [41.962617033477351, -87.744384887993178],
          [41.857851812113488, -87.632749298992792],
          [41.838390147328894, -87.685262932127401]],
        'requests_by_creation_date': {
            '2015-09-10': 596,
            '2015-09-11': 557,
            '2015-09-12': 67,
            '2015-09-13': 56,
            '2015-09-14': 309,
            '2015-09-15': 611,
            '2015-09-16': 628,
        },
        'requests_by_surface_type': {
            'Aluminum Siding': 73,
            'Asphalt': 6,
            'Brick - Painted': 449,
            'Brick - Unpainted': 416,
            'Cement (Sidewalk, Alley, Wall, Curb)': 357,
            'Glass': 54,
            'Limestone': 9,
            'Marble/Granite': 6,
            'Metal - Painted': 942,
            'Metal - Unpainted': 207,
            'Other / Unknown Surface': 87,
            'Stucco': 11,
            'Tree': 2,
            'Vinyl Siding': 16,
            'Wood - Painted': 151,
            'Wood - Unpainted': 18
        }
    }

    var creation_dates = []
    var count_by_date = []
    for(var k in graffiti_data['requests_by_creation_date']){
        creation_dates.push(k)
        count_by_date.push(graffiti_data['requests_by_creation_date'][k])
        }

    $('#chart-1').highcharts({
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Graffiti Cleanup'
        },
        xAxis: {
            categories: creation_dates,
        },
        yAxis: {
            min: 0,
            title: {
                text: 'foo',
            },
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'foo',
            data: count_by_date
        }]
    });

    $('#chart-2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Another Chart'
        },
        xAxis: {
            categories: ['A', 'B', 'C', 'D', 'E'],
        },
        yAxis: {
            min: 0,
            title: {
                text: 'bar',
            },
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'bar',
            data: [1, 2, 3, 2, 1]
        }]
    });


    var map = L.map('map').setView([41.88, -87.65], 12);
    var layer = new L.StamenTileLayer("toner"); map.addLayer(layer);
    var locations = graffiti_data['cement_graffiti_latlong']
    for (var i=0; i<locations.length; i++){
      marker = new L.circleMarker(locations[i], {color:"#D63821"}).setRadius(2).addTo(map);
    }

});
