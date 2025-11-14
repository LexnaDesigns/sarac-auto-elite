
interface AvaWidgetButtonProps {
  className?: string;
}

const AvaWidgetButton = ({ className = "" }: AvaWidgetButtonProps) => {
  return (
    <div className={className}>
      <div className="AskAva-cta" data-product="creditTool" data-type="button"></div>
    </div>
  );
};

export default AvaWidgetButton;
