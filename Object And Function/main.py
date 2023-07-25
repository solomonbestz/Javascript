

def calculator(x, y, op):
    try:
        return eval(f'{x}{op}{y}')
    except Exceptionrt:
        return 'syntax error'
    

if __name__=='__main__':
    print(calculator(4, 5, '+'))