
interface AvaWidgetInlineProps {
  className?: string;
}

const AvaWidgetInline = ({ className = "" }: AvaWidgetInlineProps) => {
  return (
    <div className={className}>
      <div className="AskAva-cta" data-product="creditTool" data-type="inline"></div>
    </div>
  );
};

export default AvaWidgetInline;
