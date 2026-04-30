var express = require('express');
var router = express.Router();
var Subject=require('../models/Subject');
router.post('/Save_Subject/',function(req,res,next)
{ 
try 
{
Subject.Save_Subject(req.body, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
// Accept_Subject
router.post('/Accept_Subject/',function(req,res,next)
{ 
try 
{
Subject.Accept_Subject(req.body, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
router.get('/Search_Subject/',function(req,res,next)
{ 
try 
{
Subject.Search_Subject(req.query.Subject_Name, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
// Search_Pending_Subject
router.get('/Search_Pending_Subject/',function(req,res,next)
{ 
try 
{
Subject.Search_Pending_Subject(req.query.Subject_Name, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
router.get('/Get_Subject/:Subject_Id_?',function(req,res,next)
{ 
try 
{
Subject.Get_Subject(req.params.Subject_Id_, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
router.get('/Delete_Subject/:Subject_Id_?/:Request_Status_?',function(req,res,next)
{ 
try 
{
Subject.Delete_Subject(req.params.Subject_Id_, req.params.Request_Status_, function (err, rows) 
{
if (err) 
{
res.json(err);
}
else 
{
res.json(rows);
}
});
}
catch (e) 
{
}
finally 
{
}
});
module.exports = router;

