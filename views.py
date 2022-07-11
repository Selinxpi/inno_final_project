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