angular.module("pagination-example", ["angular-paginate", "ui.bootstrap"])

.controller("MainController", ["$scope", function($scope){
    
    $scope.pages = [];
    $scope.pageContent = [];

    var data = [{name: "Alan Shearer", goals: 260},
                {name: "Andrew Cole", goals: 187},
                {name: "Wayne Rooney", goals: 175},
                {name: "Thierry Henry", goals: 175},
                {name: "Frank Lampard", goals: 172},
                {name: "Robbie Fowler", goals: 162},
                {name: "Michael Owen", goals: 150},
                {name: "Les Ferdinand", goals: 149},
                {name: "Teddy Sheringham", goals: 147},
                {name: "Robin Van Persie", goals: 135},
                {name: "Jimmy F Hasselbaink", goals: 128},
                {name: "Robbie Keane", goals: 126},
                {name: "Nicolas Anelka", goals: 125},
                {name: "Jermain Defoe", goals: 124},
                {name: "Dwight Yorke", goals: 123},
                {name: "Ian Wright", goals: 113},
                {name: "Steven Gerrard", goals: 112},
                {name: "Emile Heskey", goals: 111},
                {name: "Dion Dublin", goals: 111},
                {name: "Ryan Giggs", goals: 109},
                {name: "Paul Scholes", goals: 107},
                {name: "Darren Bent", goals: 106},
                {name: "Matthew Le Tissier", goals: 101},
                {name: "Didier Drogba", goals: 100},
                {name: "Emmanuel Adebayor", goals: 95},
                {name: "Yakubu", goals: 95},
                {name: "Ruud van Nistelrooy", goals: 95},
                {name: "Dimitar Berbatov", goals: 94},
                {name: "Kevin Phillips", goals: 92},
                {name: "Mark Viduka", goals: 92},
                {name: "Ole Gunnar Solskjaer", goals: 91},
                {name: "James Beattie", goals: 90},
                {name: "Kevin Davies", goals: 88},
                {name: "Dennis Bergkamp", goals: 87},
                {name: "Peter Crouch", goals: 86},
                {name: "Fernando Torres", goals: 85},
                {name: "Louis Saha", goals: 85},
                {name: "Carlos Tevez", goals: 84},
                {name: "Cristiano Ronaldo", goals: 84},
                {name: "Chris Sutton", goals: 83},
                {name: "Kevin Campbell", goals: 82},
                {name: "Craig Bellamy", goals: 81},
                {name: "Gary Speed", goals: 81},
                {name: "Tony Cottee", goals: 78},
                {name: "Chris Armstrong", goals: 71},
                {name: "Brian Deane", goals: 70},
                {name: "Eric Cantona", goals: 70},
                {name: "Luis Suarez", goals: 69},
                {name: "Gabriel Agbonlahor", goals: 68},
                {name: "Kevin Nolan", goals: 68},
                {name: "Duncan Ferguson", goals: 68},
                {name: "Paolo di Canio", goals: 68},
                {name: "Dean Holdsworth", goals: 63},
                {name: "Mark Hughes", goals: 63},
                {name: "Robert Pires", goals: 62},
                {name: "David Beckham", goals: 62},
                {name: "Stan Collymore", goals: 62},
                {name: "Daniel Sturridge", goals: 59},
                {name: "Gianfranco Zola", goals: 59},
                {name: "Niall Quinn", goals: 58},
                {name: "Peter Beardsley", goals: 58},
                {name: "Clint Dempsey", goals: 57},
                {name: "Lee Bowyer", goals: 57},
                {name: "Harry Kewell", goals: 57},
                {name: "Tim Cahill", goals: 56},
                {name: "Jason Euell", goals: 56},
                {name: "Kevin Gallacher", goals: 56},
                {name: "Sergio Aguero", goals: 55},
                {name: "Eider Gudjohnsen", goals: 55},
                {name: "John Hartson", goals: 55},
                {name: "Damien Duff", goals: 54},
                {name: "Nwankwo Kanu", goals: 54},
                {name: "Gustavo Poyet", goals: 54},
                {name: "Nicky Barmby", goals: 53},
                {name: "Danny Murphy", goals: 52},
                {name: "Darius Vassell", goals: 52},
                {name: "Efan Ekoku", goals: 52},
                {name: "Andrew Johnson", goals: 51},
                {name: "Dirk Kuyt", goals: 51},
                {name: "Trevor Sinclair", goals: 51},
                {name: "Carlton Cole", goals: 50},
                {name: "Gareth Barry", goals: 50},
                {name: "Paulo Wanchope", goals: 50},
                {name: "Mark Bright", goals: 50},
                {name: "Nolberto Solano", goals: 49},
                {name: "Gary McAllister", goals: 49},
                {name: "Fredrik Ljungberg", goals: 48},
                {name: "Ian Rush", goals: 48},
                {name: "Edin Dzeko", goals: 46},
                {name: "Joe Cole", goals: 46},
                {name: "Graham Stuart", goals: 46},
                {name: "Paul Merson", goals: 46},
                {name: "Theo Walcott", goals: 45},
                {name: "Alan Smith", goals: 45},
                {name: "Rod Wallace", goals: 45},
                {name: "Steven Fletcher", goals: 44},
                {name: "Bobby Zamora", goals: 44},
                {name: "Juan Pablo Angel", goals: 44},
                {name: "Robbie Earle", goals: 44},
                {name: "Dean Saunders", goals: 44}];

    $scope.results = data;

    
    // called to simulate dynamic results
    $scope.getResults = function(){
        $scope.results = data;
    };

    $scope.bindings = ["click", "dblclick", "blur", "change", "focus", "keydown", "keyup", "keypress", "mousedown", 
    "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup"];

    // initialise interactive directive input fields
    $scope.interactiveNpp = 10
    $scope.interactiveBinding = "dblclick"

    // function called when interactive directive 'test' button has been clicked
    $scope.changeDirective = function(){
        $scope.showPaginate = false;
        if (checkMember($scope.interactiveBinding)){      // if member is valid

        }
    };

    var checkMember = function(binding){
        var exists = false;
        angular.forEach($scope.bindings, function(value, key){
            if(angular.equals(value, binding)) exists = true;
        });
        return exists;
    };
}])