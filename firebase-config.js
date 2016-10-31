var firebaseConfig = {
  apiKey: "AIzaSyAubBTOEwLEtudI00cOf8c8c8a0ao7N1kA",
  authDomain: "note-list-bee2e.firebaseio.com/",
  databaseURL: "https://domain-here.firebaseio.com"	
};

firebase.initializeApp(firebaseConfig);

var store = firebase.database().ref()

function storeValue(name, value) {	
  store.child(name).set(value)
}

function addListItem(name, value) {		
  store.child(name).push(value)
}

function onNewListItem(name, callback) {		
  store.child(name).on("child_added", function(data) {
    callback(data.val())
  })
}

function deleteValue(name) {	
  store.child(name).remove()
}

function onNewValue(name, callback) {	
  store.child(name).child(name).on("value", function(data) {		
    callback(data.val());
  })
}