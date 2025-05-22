import sqlite3
from contextlib import closing
from business import Fish, FishingLog

conn = None

def connect():
    global conn
    if not conn:
        DB_FILE = "final.sqlite"
        conn = sqlite3.connect(DB_FILE)
        conn.row_factory = sqlite3.Row
        
def close():
    if conn:
        conn.close()
        
def make_fish(row):
    return Fish(row["type"], row["length"], row["weight"], row["ID"])

def get_fish():
    query = '''SELECT * 
                FROM Fish
                ORDER BY ID'''
    with closing(conn.cursor()) as c:
        c.execute(query)
        results = c.fetchall()
        
    log = FishingLog()
    for row in results:
        fish = make_fish(row)
        log.add(fish)
    return log

def add_fish(fish):
    sql = '''INSERT INTO Fish (type, length, weight)
                VALUES (?,?,?)'''
    with closing(conn.cursor()) as c:
        c.execute(sql, (fish.type, fish.length, fish.weight))
        conn.commit()
        
def delete_fish(fish):
    sql = '''DELETE FROM Fish
                WHERE ID = ?'''
    with closing(conn.cursor()) as c:
        c.execute(sql, (fish.id,))
        conn.commit
