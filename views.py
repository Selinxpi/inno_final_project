from flask import Flask, render_template, Blueprint, redirect, url_for

my_view = Blueprint('my_view', __name__)

@my_view.route('/')
def index():
    return render_template("index.html")

@my_view.route('/events')
def events():
    return render_template("events.html")

@my_view.route('/contactus')
def contactus():
    return render_template("contactus.html")

@my_view.route('/placebo')
def placebo():
    return render_template("placebo.html")

@my_view.route('/limpbizkit')
def limpbizkit():
    return render_template("limpbizkit.html")

@my_view.route('/disturbed')
def disturbed():
    return render_template("disturbed.html")

@my_view.route('/mcr')
def mcr():
    return render_template("mcr.html")

@my_view.route('/corey')
def corey():
    return render_template("corey.html")

@my_view.route('/slipknot')
def slipknot():
    return render_template("slipknot.html")

@my_view.route('/rhcp')
def rhcp():
    return render_template("rhcp.html")

@my_view.route('/korn')
def korn():
    return render_template("korn.html")

@my_view.route('/ville')
def ville():
    return render_template("ville.html")

@my_view.route('/trivium')
def trivium():
    return render_template("trivium.html")

@my_view.route('/welcome')
@my_view.route('/home')
def index_redirect():
    return redirect(url_for("my_view.index"))

@my_view.route('/contactme')
@my_view.route('/contact')
@my_view.route('/help')
@my_view.route('/email')
def contactus_redirect():
    return redirect(url_for("my_view.contactus"))

@my_view.route('/event')
@my_view.route('/concert')
@my_view.route('/allconcerts')
@my_view.route('/allevents')
def events_redirect():
    return redirect(url_for("my_view.events"))

@my_view.route('/Placebo')
def placebo_redirect():
    return redirect(url_for("my_view.placebo"))

@my_view.route('/lb')
@my_view.route('/limp')
@my_view.route('/bizkit')
@my_view.route('/limp_bizkit')
@my_view.route('/Limp_Bizkit')
@my_view.route('/limp-bizkit')
@my_view.route('/Limp-Bizkit')
def limpbizkit_redirect():
    return redirect(url_for("my_view.limpbizkit"))

@my_view.route('/Disturbed')
def disturbed_redirect():
    return redirect(url_for("my_view.disturbed"))

@my_view.route('/mychemicalromance')
@my_view.route('/my_chemical_romance')
@my_view.route('/MyChemicalRomance')
@my_view.route('/My_Chemical_Romance')
@my_view.route('/my-chemical-romance')
@my_view.route('/My-Chemical-Romance')
def mcr_redirect():
    return redirect(url_for("my_view.mcr"))

@my_view.route('/Corey_Taylor')
@my_view.route('/corey_taylor')
@my_view.route('/Corey-Taylor')
@my_view.route('/corey-taylor')
@my_view.route('/taylor')
@my_view.route('/CoreyTaylor')
@my_view.route('/coreytaylor')
def corey_redirect():
    return redirect(url_for("my_view.corey"))

@my_view.route('/Slipknot')
def slipknot_redirect():
    return redirect(url_for("my_view.slipknot"))

@my_view.route('/redhotchilipeppers')
@my_view.route('/red_hot_chili_peppers')
@my_view.route('/red-hot-chili-peppers')
@my_view.route('/RedHotChiliPeppers')
@my_view.route('/Red-Hot-Chili-Peppers')
@my_view.route('/Red_Hot_Chili_Peppers')
def rhcp_redirect():
    return redirect(url_for("my_view.rhcp"))

@my_view.route('/KoRn')
@my_view.route('/Korn')
def korn_redirect():
    return redirect(url_for("my_view.korn"))

@my_view.route('/Trivium')
def trivium_redirect():
    return redirect(url_for("my_view.trivium"))