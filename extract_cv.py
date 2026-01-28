import PyPDF2

def extract_text_from_pdf(pdf_path):
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page_num in range(len(reader.pages)):
            text += reader.pages[page_num].extract_text()
    return text

if __name__ == "__main__":
    pdf_path = r"c:\Users\EvaLa\OneDrive - EduServices\Bureau\MBA Big data\M2\Portefolio\CV_Eva_LASSALLE.pdf"
    content = extract_text_from_pdf(pdf_path)
    with open('cv_content.txt', 'w', encoding='utf-8') as f:
        f.write(content)
